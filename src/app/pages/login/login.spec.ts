import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login'; // Importe a CLASSE, não a variável
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Como o seu componente é Standalone, ele vai em 'imports'
      imports: [LoginComponent, ReactiveFormsModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Avisa o Angular para verificar mudanças iniciais
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
