import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-caculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'noValue';
  firstNumer: number = 0;
  secondNumer: number = 0;

  onClickValue(value: string, type: any) {
    if (type == 'number') {
      this.onClickNumber(value);
    } else if (type == 'function') {
      this.onFunctionClick(value);
    }
  }

  onClickNumber(value: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber += value;
    } else {
      this.calNumber = value;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(value: string) {
    if (this.funcT == 'c') {
      this.clearAll();
    } else if (this.funcT == 'NoFunction') {
      this.firstNumer = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = value;
    } else if (this.funcT != 'NoFunction') {
      this.secondNumer = this.calValue;
      // let do calculation
      this.valueCaculate(value);
    }
  }
  valueCaculate(value: string) {
    if (this.funcT == '+') {
      const total = this.firstNumer + this.secondNumer;
      this.totalAssignValue(total, value);
      if (value == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '-') {
      const total = this.firstNumer - this.secondNumer;
      this.totalAssignValue(total, value);
      if (value == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '*') {
      const total = this.firstNumer * this.secondNumer;
      this.totalAssignValue(total, value);
      if (value == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '/') {
      const total = this.firstNumer / this.secondNumer;
      this.totalAssignValue(total, value);
      if (value == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '%') {
      const total = this.firstNumer % this.secondNumer;
      this.totalAssignValue(total, value);
      if (value == '=') {
        this.onEqualPress();
      }
    }
  }

  totalAssignValue(total: number, value: string) {
    this.calValue = total;
    this.firstNumer = total;
    this.secondNumer = 0;
    this.calNumber = 'noValue';
    this.funcT = value;
  }

  onEqualPress() {
    this.firstNumer = 0;
    this.secondNumer = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.calValue = 0;
    this.firstNumer = 0;
    this.secondNumer = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
}
