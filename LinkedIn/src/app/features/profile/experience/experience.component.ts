import { Component, OnInit } from "@angular/core";
import { ExperienceService } from "./experience.service";
import { Experience } from "src/app/_models/experience";
import { months, getDateDifference } from "src/app/_utilities/utilities";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  formOpened = false;
  selectedExperience: Experience;
  months = months;
  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experienceService
      .getAll()
      .subscribe(experiences => (this.experiences = experiences));
  }

  editExperience(experience: Experience) {
    this.selectedExperience = experience;
    this.formOpened = true;
  }

  getDateDifference(start, end) {
    return getDateDifference(start, end);
  }

  closeModal() {
    this.selectedExperience = null;
    this.formOpened = false;
  }
}
