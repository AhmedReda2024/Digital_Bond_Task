import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
@Component({
  selector: 'app-home',
  imports: [
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  @ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,

    dots: false,
    nav: false,
    items: 1,
  };

  next() {
    this.owlCarousel.next();
  }

  prev() {
    this.owlCarousel.prev();
  }

  phoneForm!: FormGroup;

  // Enums for dropdown behavior
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  SearchCountryField = SearchCountryField;

  preferredCountries: CountryISO[] = [
    CountryISO.Egypt,
    CountryISO.UnitedArabEmirates,
    CountryISO.SaudiArabia,
  ];
  selectedCountryISO: CountryISO = CountryISO.Egypt;
  searchFields = [
    SearchCountryField.Name,
    SearchCountryField.DialCode,
    SearchCountryField.Iso2,
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.phoneForm = this.fb.group({
      phone: [undefined, [Validators.required]],
    });
  }

  submit() {
    console.log(this.phoneForm.value.phone); // will log object with number & country info
  }
}
