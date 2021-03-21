import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

export interface InitPermission {
  name: string;
  completed: boolean;
  child?: InitPermission[];
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  /*
     component này nhận vào 1 permision object, hiển thị lên màn hình dạng checkbox tree,
     emit checkbox value mỗi khi checkbox.checked có sự thay đổi.
  */

  // danh sach quyen nhan vao
  @Input() permission: InitPermission;

  // permission's name emitter
  @Output() quyenEmitter = new EventEmitter<string>();

  // user click node cha => emit node cha value, emit cac gia tri node con ma co su thay doi truong completed
  setAll(completed: boolean) {
    if (this.permission.child === null || this.permission.child === undefined) {
      this.emitData(this.permission.name);
      return;
    }
    this.emitData(this.permission.name);
    if (completed === true) { // emit nhung checkbox chua dc checked
        this.permission.child
          .filter(x => x.completed === false)
          .forEach(x => this.emitData(x.name));
      }
      else{ // emit nhung checkbox da dc checked
        this.permission.child
          .filter(x => x.completed === true)
          .forEach(x => this.emitData(x.name));
      }
    this.permission.child.forEach(t => t.completed = completed); // thay doi truong completed cac node con
  }

  // emit quyen to parent component
  emitData(data){
    this.quyenEmitter.emit(data);
  }


}
