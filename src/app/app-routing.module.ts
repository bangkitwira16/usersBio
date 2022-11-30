import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './views/crud/crud.component';
import { EditorComponent } from './views/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
  },
  {
    path: 'crud',
  component: CrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
