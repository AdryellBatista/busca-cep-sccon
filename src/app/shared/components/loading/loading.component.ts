import { Component, OnInit, Inject, AfterViewInit } from "@angular/core";
import { LoadingService } from "../../services/loading";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent implements AfterViewInit {
  public loading = false;

  constructor(public loadingService: LoadingService) {}

  ngAfterViewInit() {
    this.loadingService.loading.subscribe((loading: boolean) => {
      this.loading = loading;
    });
  }
}
