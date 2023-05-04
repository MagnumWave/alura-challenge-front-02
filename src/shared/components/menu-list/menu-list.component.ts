import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinct, filter } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  @Input('isPortraitDevice') isPortraitDevice = false;

  styleTrigger: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(x => x instanceof NavigationEnd),
      distinct()
    ).subscribe((x:any) => {
      const currentUrl = x.url;
      const idFromRouter = Number.parseInt(currentUrl.charAt(currentUrl.length - 1));

      this.styleTrigger = currentUrl.includes('/editor') && idFromRouter != 0;
    })
  }

  handleRouteCheck(){
    const currentUrl = this.router.url;
    const idFromRouter = Number.parseInt(currentUrl.charAt(currentUrl.length - 1));

    if(currentUrl.includes('/editor') && idFromRouter != 0){
      this.router.navigateByUrl('editor/0');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }

}
