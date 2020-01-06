import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-permit-checks',
  templateUrl: './permit-checks.component.html',
  styleUrls: ['./permit-checks.component.scss']
})
export class PermitChecksComponent implements OnInit {

  @Input() arrayChecks :any[] = [];
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    
  }
}
