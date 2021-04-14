import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { AssetService } from '../../services/asset.service';
import { Asset } from '../../models/asset';
import { AssetTypeEnum } from '../../enums/asset-type-enum.enum';

@Component({
  selector: 'app-asset-library',
  templateUrl: './asset-library.component.html',
  styleUrls: ['./asset-library.component.css']
})
export class AssetLibraryComponent implements OnInit 
{

  assets: Asset[] | null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private assetService: AssetService) 
  { 
    this.assets = new Array();
  }


  ngOnInit(): void {
    this.assets = this.assetService.getAssets();
  }

  createAsset(): void {

    this.router.navigate(['/library/createAsset']);
    
  }

  

}
