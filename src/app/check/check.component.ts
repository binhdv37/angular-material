import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

export interface Permission {
  name: string;
  completed: boolean;
  child?: Permission[];
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit{

  // danh sach quyen nhan vao
  @Input() permission: Permission;

  // array quyen emit len
  @Output() quyenEmitter = new EventEmitter<string[]>();

  quyen: string[] = [];

  ngOnInit(): void {
    // khoi tao gia tri cho quyen
    if (this.permission.completed === true) { this.quyen.push(this.permission.name); }
    if (this.permission.child !== null) {
      this.permission.child.forEach( p => {
        if (p.completed === true) { this.quyen.push(p.name); }
      });
    }
  }

  // update quyen khi user click node cha
  setAll(completed: boolean) {
    if (this.permission.child == null) {
      return;
    }
    this.permission.child.forEach(t => t.completed = completed);
    if (completed === true) { this.addAll(); }
    else { this.removeAll(); }

    // emit data
    this.emitData();
  }

  // update quyen khi user click node con
  updateArr(completed: boolean, value){
    if (completed === true) { this.quyen.push(value); }
    else{
      this.quyen = this.quyen.filter(x => x !== value);
    }
    this.emitData();
  }

  // theem tat ca quyen
  addAll(){
    this.removeAll();
    this.quyen.push(this.permission.name);
    if (this.permission.child !== null) {
      this.permission.child.forEach( c => this.quyen.push(c.name));
    }
  }

  // xoa tat ca quyen
  removeAll(){
    this.quyen = [];
  }

  // emit quyen to parent component
  emitData(){
    this.quyenEmitter.emit(this.quyen);
  }


}
