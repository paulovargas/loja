import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose the official store URL', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.storeUrl).toBe(
      'https://www.mercadolivre.com.br/pagina/eletome'
    );
  });

  it('should render the redirect fallback', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Abrindo a loja Eletome'
    );
    expect(compiled.querySelector<HTMLAnchorElement>('a')?.href).toBe(
      'https://www.mercadolivre.com.br/pagina/eletome'
    );
  });
});
