import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  public authForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private readonly router: Router) {}

  public onSubmit(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();

      return;
    }

    this.router.navigate(['get-task'])
  }
}
