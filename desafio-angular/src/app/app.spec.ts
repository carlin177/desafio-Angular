import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App (componente raíz)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('debería crearse', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debería exponer el título de la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance as App & { title: any };
    // `title` es un signal; se accede con `title()`
    expect(typeof app.title).toBe('function');
    expect(app.title()).toBe('Codeland');
  });
});
