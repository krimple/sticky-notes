import { NgModule } from '@angular/core';
import { NoteContainerComponent } from './note-container/note-container.component';
import { NoteComponent } from './note-container/note/note.component';
import { NoteService } from './note.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    NoteContainerComponent,
    NoteComponent
  ],
  providers: [
    NoteService
  ],
  exports: [
    NoteContainerComponent
  ]
})
export class StickyNotesModule {}
