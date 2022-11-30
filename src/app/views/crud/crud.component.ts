import { Component, OnInit, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/table/table.model';
import { UserFormComponent } from 'src/app/shared/components/user-form/user-form.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  public users = []
  
  userTableColumns: TableColumn[];
  @ViewChild(UserFormComponent) userFormComponent: UserFormComponent;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers()
    this.initColumns()
  }

  fetchUsers() {
    setTimeout(() => {
      this.users = this.userService.getUsers()
    }, 1000);
  }

  onSave() {
    this.fetchUsers()
  }

  initColumns(): void {
    this.userTableColumns = [
      {
        name: 'Name',
        dataKey: 'firstName'
      },
      {
        name: 'DOB',
        dataKey: 'dob'
      },
      {
        name: 'Gender',
        dataKey: 'gender'
      },
      {
        name: 'Language Known',
        dataKey: 'languages',
        type: 'template'
      },
      {
        name: 'Qualification',
        dataKey: 'qualification'
      },
      {
        name: 'Specialization',
        dataKey: 'specialization'
      },
      {
        name: 'Image',
        dataKey: 'image',
        type: 'template'
      },
      {
        name: 'Contact',
        dataKey: 'contact'
      },
      {
        name: 'Address',
        dataKey: 'address'
      },
      {
        name: 'Action',
        dataKey: 'action',
        type: 'template'
      }
    ];
  }

  onEdit(index: number) {
    this.userFormComponent.edit(index)
  }

  onDelete(index: number) {
    this.userService.deleteUser(index)
    this.fetchUsers()
  }

}
