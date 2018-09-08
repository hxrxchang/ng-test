import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Page1Component } from './page1.component';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Component ],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });

  it('何もしない場合のタイトルがAppComponentのtitleと同じかどうか', async(() => {
    expect(el.textContent).toContain(component.title);
  }));
  it('何もしない場合のタイトルがAppComponentのtitleと同じかどうか(上のテストと同じことをしている)', async(() => {
    expect(el.textContent).toContain('テストだよ');
  }));

  it('detectChangesが1回起きた時、h1の値が変更されるかどうか', async(() => {
    component.title = 'クリックされたよ';
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  }));

  it('changeH1Elementが呼び出されたら、titleが変更されるかどうか', async(() => {
    component.onClick();
    expect(component.title).toBe('クリックされたよ');
  }));
});
