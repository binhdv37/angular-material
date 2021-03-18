export interface PermissionInfo{
  permissions: Permission[];
  granted: string[];
  // constructor(permissions: Permission[], granted: string[]) {
  //   this.permissions = permissions;
  //   this.granted = granted;
  // }
}

export interface Permission {
  name: string;
  completed: boolean;
  child?: Permission;
  // constructor(name: string, child: Permission) {
  //   this.name = name;
  //   this.child = child;
  // }
}
