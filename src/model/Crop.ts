export class Crop {
    cropName: string;
    scientificName: string;
    category: string;
    season: string;
    fieldId: string;
    cropImage: string | null;

    constructor(cropName: string, scientificName: string, category: string, season: string, fieldId: string, cropImage: string | null) {
      this.cropName = cropName;
      this.scientificName = scientificName,
      this.category = category,
      this.season = season,
      this.fieldId = fieldId,
      this.cropImage = cropImage
    }
}