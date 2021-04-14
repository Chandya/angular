import { Injectable } from '@angular/core';

import { SessionService } from '../services/session.service';
import { Asset } from '../models/asset';
import { AssetTypeEnum } from '../enums/asset-type-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  assets: Asset[] | null;

  constructor(private sessionService: SessionService) {
    this.assets = this.sessionService.getAssets();

    if (this.assets == null) {
      this.assets = new Array();
      let asset: Asset;
      asset = new Asset(1, 'Client Database', AssetTypeEnum.DATABASE);
      this.assets.push(asset);
      asset = new Asset(
        2,
        'Legacy Website Application',
        AssetTypeEnum.APPLICATION
      );
      this.assets.push(asset);
      asset = new Asset(3, 'User Account', AssetTypeEnum.ACCOUNT);
      this.assets.push(asset);
      asset = new Asset(4, 'Root Account', AssetTypeEnum.ADMIN_DOMAIN);
      this.assets.push(asset);
      asset = new Asset(5, 'General Business Database', AssetTypeEnum.DATABASE);
      this.assets.push(asset);
      asset = new Asset(
        6,
        'Public Database',
        AssetTypeEnum.PUBLIC_FACING_DATABASE
      );
      this.assets.push(asset);
      asset = new Asset(
        7,
        'Vital Company Files on Server',
        AssetTypeEnum.FILE_SYSTEM
      );
      this.assets.push(asset);

      this.sessionService.setAssets(this.assets);
    }
  }

  getAssets() {
    return this.assets;
  }

  getAssetByAssetId(assetId: number): Asset {
    if (this.assets != null) {
      for (let asset of this.assets) {
        if (asset.assetId == assetId) {
          return asset;
        }
      }

      return new Asset();
    } else {
      return new Asset();
    }
  }

  createNewasset(newAsset: Asset) {
    if (this.assets != null) {
      let asset: Asset = new Asset();
      asset.assetId = newAsset.assetId;
      asset.assetName = newAsset.assetName;
      asset.assetType = newAsset.assetType;
      this.assets.push(asset);

      this.sessionService.setAssets(this.assets);
    }
  }

  updateAsset(assetToUpdate: Asset) {
    if (this.assets != null) {
      for (var i = 0; i < this.assets.length; i++) {
        if (this.assets[i].assetId == assetToUpdate.assetId) {
          this.assets[i].assetName = assetToUpdate.assetName;
          this.assets[i].assetType = assetToUpdate.assetType;
          break;
        }
      }

      this.sessionService.setAssets(this.assets);
    }
  }

  deleteasset(assetId: number | undefined) {
    if (this.assets != null) {
      for (var i = 0; i < this.assets.length; i++) {
        if (this.assets[i].assetId == assetId) {
          this.assets.splice(i, 1);
          break;
        }
      }

      this.sessionService.setAssets(this.assets);
    }
  }
}
