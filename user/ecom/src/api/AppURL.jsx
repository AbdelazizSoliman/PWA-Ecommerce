class AppURL {
  static BaseURL =
    import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";
  static VisitorDetails = this.BaseURL + "/getvisitor";
  static PostContact = this.BaseURL + "/postcontact";
  static AllSiteInfo = this.BaseURL + "/allsiteinfo";
  static AllCategoryDetails = this.BaseURL + "/allcategory";
  static AllSlider = this.BaseURL + "/allslider";

  static ProductListByRemark(Remark) {
    return this.BaseURL + "/productlistbyremark/" + Remark;
  }

  static ProductListByCategory(category) {
    return this.BaseURL + "/productlistbycategory/" + category;
  }

  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + "/productlistbysubcategory/" + category + "/" + subcategory
    );
  }

  static ProductDetails(code) {
    return this.BaseURL + "/productdetails/" + code;
  }

  static NotificationHistory = this.BaseURL + "/notification";

  static ProductBySearch(searchkey) {
    return this.BaseURL + "/search/" + searchkey;
  }
}

export default AppURL;
