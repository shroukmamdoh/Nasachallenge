import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private toastr: NbToastrService) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['login', '']);
  }

  showToast(position, status) {
    this.toastr.show(status || 'attention', 'Feature will be coming soon.', {
      position,
      status,
    });
  }

  toggle() {
    this.showToast('bottom-end', 'info')
  }

}
