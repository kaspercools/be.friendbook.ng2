import {Component,EventEmitter, Input,Output} from '@angular/core';

import {Profile} from '../models/profile.model';
import {ProfileService} from '../services/profiles.service';
import {MdSnackBar} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'profile-card',
    templateUrl: './card.component.html'
})
export class ProfileCardComponent{
    @Input() private profile:Profile;
    @Output() private deleted:EventEmitter<any> = new EventEmitter<any>();

    constructor(private profileService: ProfileService, public snackBar: MdSnackBar){

    }
    
    openSnackBar() {
        this.snackBar.open("Removing profile:", this.profile.username,{
            duration:2000
        });
    }

    delete(profile:Profile){
        //could cause issues when rapidly clicking items! ( XHR requests -> execution delay )
        this.profileService.deleteProfile(profile.username).subscribe(
            (prof)=>{
                //could show a completion message
                
                //fetch new data
                this.deleted.emit();
                this.openSnackBar();
        });
    }
    
    private refreshData(){

    }
}