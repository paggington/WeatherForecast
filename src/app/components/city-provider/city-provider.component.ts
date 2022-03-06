import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchR} from "../../models/SearchR.model";
import {ErrorWithProvidedDataSnackBarService} from "../../services/error-with-provided-data-snack-bar.service";

@Component({
  selector: 'app-city-provider',
  templateUrl: './city-provider.component.html',
  styleUrls: ['./city-provider.component.css']
})
export class CityProviderComponent implements OnInit {
  @Output()
  dataEmitter: EventEmitter<{ date: string, city: string }> = new EventEmitter<{ date: string; city: string }>();
  formGroup!:FormGroup;
  searchR?: SearchR={date:"",city:""};
  constructor(private datePipe: DatePipe,private forms:FormBuilder,private errorDataEntered:ErrorWithProvidedDataSnackBarService) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.searchR?.date=this.getTodayDate();
    this.formGroup=this.forms.group({
      date:['',[Validators.required,Validators.nullValidator]],
      city:['',[Validators.required,Validators.minLength(3)]]
    });
    this.setDateFieldToToday()
  }
  setDateFieldToToday(){
    this.formGroup.get('date')?.setValue(this.getTodayDate());
  }
  getTodayDate() {
    let date = new Date();
    // @ts-ignore
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  async onSubmit() {
    // @ts-ignore
    this.searchR?.date=this.date?.value;
    // @ts-ignore
    this.searchR?.city=this.city?.value;
    if(this.searchR?.date&&this.searchR.city) {
      this.dataEmitter.emit(this.searchR);
    }
    this.formGroup.reset();
    this.setDateFieldToToday()
  }
  get date(){
    return this.formGroup?.get('date');
  }
  get city(){
    return this.formGroup?.get('city');
  }
}


