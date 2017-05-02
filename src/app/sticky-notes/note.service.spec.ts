import { TestBed, getTestBed, async } from '@angular/core/testing';

import { NoteService } from './note.service';
import { NoteData } from './models/note-data';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';

describe('NoteService', () => {
  let service: NoteService;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }
      ],
      imports: [
        HttpModule
      ]
    }).compileComponents().then(
      () => {
        mockBackend = getTestBed().get(MockBackend);
        service = getTestBed().get(NoteService);
        console.log(`fetched ${mockBackend} and ${service}`);
      });
  }));

  it('should create the service', () => {
    expect(service).toBeDefined();
  });

  it('should respond in negative when there are no notes on the server', async(() => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: []
      })));
      service.hasNotes().then((result: boolean) => {
        expect(result).toBe(false);
      });
    });
  }));

  it('should send notes to the local storage system when saving', async(() => {
    return new Promise<void>((resolve, reject) => {
     const testData = new NoteData('title2', 'content2');
     service.saveNote(testData)
        .then(
          (success) => {
            if (success) {
              resolve();
            } else {
              reject(false);
            }
          });
      });
  }));
});
