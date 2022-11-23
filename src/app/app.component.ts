import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Ismails';

  DATA = [
    {
      Form: "Patient's Form",
      Name: "PatientName",
      Age: "PatientAge",
      Specific: "Disease"
    },
    {
      Form: "Doctor's Form",
      Name: "DoctorName",
      Age: "DoctorAge",
      Specific: "Qualification"
    },
  ];
}
