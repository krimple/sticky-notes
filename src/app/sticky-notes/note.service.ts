import { Injectable } from '@angular/core';
import { NoteData } from './models/note-data';
import * as faker from 'faker';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NoteService {

  // on the way up - if we don't have any notes, generate them
  constructor(private http: Http) {
    const self = this;
    this.hasNotes()
      .then((hasNotesResult: boolean) => {
        if (!hasNotesResult) {
          for (let i = 0; i < 5; i++) {
            self.saveNote(self.generateNote());
          }
        }
    });
  }

  generateNote(): NoteData {
    return new NoteData(faker.random.words(2), faker.random.words(15))
  }

  hasNotes() {
    return new Promise<boolean>((resolve, reject) => {
      this.http.get('/api/notes')
        .map((response: Response) => {
          return response.json();
        })
        .subscribe(
          (notes: NoteData[]) => {
            resolve(notes && notes.length > 0);
          },
          (error: any) => {
            reject(error);
          });
    });
  }

  saveNote(note: NoteData) {
    let call;
    if (note.id) {
      call = this.http.put('api/notes/' + note.id, note)
    } else {
      call = this.http.post('api/notes', note)
    }
    call.subscribe(() => {}, (error) => { throw new Error(`Save failed. ${error}`); });
  }

  loadNotes(): Promise<NoteData[]> {
    return new Promise<NoteData[]>((resolve, reject) => {
      this.http.get('api/notes')
        .map((data: Response) => data.json())
        .subscribe(
          (data: NoteData[]) => {
            resolve(data);
          },
          (error: any) => {
            reject(error);
          });
    });
  }
}
