import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatSelectModule, BrowserModule],
})
export class TextEditorComponent implements OnInit {
  @ViewChild('desc', { static: true }) desc: ElementRef;

  isEdit: boolean = true;
  tagOptions: string[] = ['p', '<H1>', 'h2', 'h3', 'h4', 'h5'];
  size = 3;
  public model: any;
  constructor() {}
  exeCmd(cmd: string, tag?: string) {
    document.execCommand(cmd, false, undefined);
    if (cmd === 'formatBlock') document.execCommand(cmd, false, tag);
    if (cmd === 'fontSize') {
      if (tag === 'increase') {
        if (this.size <= 7) this.size = this.size + 1;
      } else {
        if (this.size != 0) this.size = this.size - 1;
      }
      document.execCommand(cmd, false, this.size.toString());
    }
  }

  onTagChange(value: string) {
    console.log(value);
    document.execCommand('formatBlock', false, value);
  }

  ngOnInit() {}

  onButtonGroupClick($event: any) {
    let clickedElement = $event.target || $event.srcElement;

    console.log(clickedElement.parentElement);
    if (clickedElement.parentNode.nodeName === 'BUTTON') {
      let isCertainButtonAlreadyActive =
        clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      } else clickedElement.className += ' active';
    }
  }

  onInput(event: any) {
    this.model = event.target.innerHtml;
  }
}
