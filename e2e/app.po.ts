import { browser, element, by } from 'protractor';

export class StickyNotesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sn-root h1')).getText();
  }
}
