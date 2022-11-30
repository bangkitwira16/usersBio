import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextEditorComponent } from './shared/components/text-editor/text-editor.component';
import { EditorComponent } from './views/editor/editor.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { CrudComponent } from './views/crud/crud.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { TableComponent } from './shared/components/table/table.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LanguagePipe } from './shared/pipes/language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    EditorComponent,
    TableComponent,
    LanguagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    TextEditorComponent,
    UserFormComponent,
    MatIconModule, 
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
