import { AssetTypeEnum } from '../enums/asset-type-enum.enum';

export class Asset {
  assetId: number | undefined;
  assetName: string | undefined;
  assetType: AssetTypeEnum | undefined;

  constructor(assetId?: number, assetName?: string, assetType?: AssetTypeEnum) {
    this.assetId = assetId;
    this.assetName = assetName;
    this.assetType = assetType;
  }
}
