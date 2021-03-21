import {Component, OnInit} from '@angular/core';
import {InitPermission} from './check/check.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // cac gia tri mac dinh :
  // key-permissions map data
  myMap: Map<string, string[]> = new Map([
    ['QL_TK', ['PAGES.ACCOUNT', 'PAGES.ACCOUNT.CREATE', 'PAGES.ACCOUNT.UPDATE', 'PAGES.ACCOUNT.DELETE']],
    ['QL_VAITRO', ['PAGES.ROLES', 'PAGES.ACCOUNT.CREATE', 'PAGES.ACCOUNT.UPDATE', 'PAGES.ACCOUNT.DELETE']],
    ['QL_DAMTOM', ['PAGES.DAMTOM', 'PAGES.DAMTOM.CREATE', 'PAGES.DAMTOM.UPDATE', 'PAGES.DAMTOM.DELETE']],
    ['QL_TT_CHUNG', ['PAGES.DAMTOM', 'PAGES.DAMTOM.CREATE', 'PAGES.DAMTOM.UPDATE', 'PAGES.DAMTOM.DELETE']],
    ['GIAM_SAT', ['PAGES.DAMTOM', 'PAGES.GIAMSAT']],
    ['DIEU_KHIEN', ['PAGES.DAMTOM', 'PAGES.DIEUKHIEN']],
    ['DL_CAM_BIEN', ['PAGES.DAMTOM', 'PAGES.DLCAMBIEN']],
    ['TL_LUATCB', ['PAGES.DAMTOM', 'PAGES.TLLUATCANHBAO']],
    ['QL_CAMERA', ['PAGES.DAMTOM', 'PAGES.QLCAMERA']],
    ['QL_THIETBI', ['PAGES.DAMTOM', 'PAGES.QLTHIETBI']],
    ['DATLICH_XUATBC', ['PAGES.DATLICH_XUATBAOCAO']],
    ['BAO_CAO', ['PAGES.BAOCAO']],
    ['BC_TONGHOP', ['PAGES.BCTONGHOP']],
    ['BC_DLGIAMSAT', ['PAGES.DLGIAMSAT']],
    ['BC_CANHBAO', ['PAGES.BC_CANHBAO']],
    ['BC_KETNOI_CAMBIEN', ['PAGES.BC_KETNOI_CAMBIEN']],
    ['BC_GUITT_CB', ['PAGES.BC_GUI_TTCB']]
  ]);

  initPermissions: InitPermission[] = [
    {
      name: 'QL_TK',
      completed: false
    },
    {
      name: 'QL_VAITRO',
      completed: false,
    },
    {
      name: 'QL_DAMTOM',
      completed: false,
      child: [
        {name: 'QL_TT_CHUNG', completed: false},
        {name: 'GIAM_SAT', completed: false},
        {name: 'DIEU_KHIEN', completed: false},
        {name: 'DL_CAM_BIEN', completed: false},
        {name: 'TL_LUATCB', completed: false},
        {name: 'QL_CAMERA', completed: false},
        {name: 'QL_THIETBI', completed: false},
      ]
    },
    {
      name: 'DATLICH_XUATBC',
      completed: false,
    },
    {
      name: 'BAO_CAO',
      completed: false,
      child: [
        {name: 'BC_TONGHOP', completed: false},
        {name: 'BC_DLGIAMSAT', completed: false},
        {name: 'BC_CANHBAO', completed: false},
        {name: 'BC_KETNOI_CAMBIEN', completed: false},
        {name: 'BC_GUITT_CB', completed: false},
      ]
    }
  ];

  permissionList: string[];

  // mảng các key đc tích
  keyArr: string[] = []; // mảng các key đc tích

  // check xem mảng arr có contain tất cả element của mảng target hay k
  checker = (arr, target) => target.every(v => arr.includes(v));

  updateCheckedKeys(value: string): void{
    // update key arr :
    if (this.keyArr.includes(value)){
      this.keyArr = this.keyArr.filter(x => x !== value);
    } else{
      this.keyArr.push(value);
    }
    console.log(this.keyArr);
  }

  ngOnInit(): void {
    // fake permission list nhan dc:
    this.permissionList = [
      'PAGES.ROLES', 'PAGES.ACCOUNT.CREATE',
      'PAGES.ACCOUNT.UPDATE', 'PAGES.ACCOUNT.DELETE',
      'PAGES.DAMTOM', 'PAGES.GIAMSAT'
    ];

    // khởi tạo mảng các key đc tích : keyArr.
    for (const [key, value] of this.myMap){
      if (this.checker(this.permissionList, value)) {
        this.keyArr.push(key);
      }
    }

    // thay đổi giá trị các trường completed trong initPermissions cho phù hợp với các key khởi tạo :
    for (const p of this.initPermissions){
      if (this.keyArr.includes(p.name)) { p.completed = true; }
      if (p.child !== null && p.child !== undefined) {
        for (const c of p.child) {
          if (this.keyArr.includes(c.name)) { c.completed = true; }
        }
      }
    }
  }
}
