import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Password generater';
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  
  onChangeLength(event: Event): void {
    const pValue = (event.target as HTMLInputElement).value;

  
    const parseValue = parseInt(pValue);
    if(!isNaN(parseValue)) {
      this.length = parseValue;

    }
    console.log('event', parseValue);
  }
  

  onButtonClick() {
    console.log('Button was clicked');
    console.log("include letters:", this.includeLetters);
    console.log("include letters:", this.includeNumbers);
    console.log("include letters:", this.includeSymbols);

   // this.password = 'My Password'; 
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }
    
    let generatedPassword = '';

    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;                           
  }

  getPassword() {
    return this.password;
  }
}
