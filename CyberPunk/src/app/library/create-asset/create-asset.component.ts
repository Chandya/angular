import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { SessionService } from '../../services/session.service';
import { AssetService } from '../../services/asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AssetTypeEnum } from 'src/app/enums/asset-type-enum.enum';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit 
{
  submitted: boolean;
  newAsset: Asset;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private assetService: AssetService) { 

      this.submitted = false;
      this.newAsset = new Asset();

    }

  ngOnInit(): void {

  }

  clear()
	{
		this.submitted = false;
		this.newAsset = new Asset();
  }
  
  create(createAssetForm: NgForm)
	{		
		this.submitted = true;
		
		if (createAssetForm.valid) 
		{
			this.assetService.createNewasset(this.newAsset);
			this.router.navigate(["/library/asset-library"]);
		}
	}

}
