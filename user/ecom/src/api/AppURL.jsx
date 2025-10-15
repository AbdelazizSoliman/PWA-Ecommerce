const resolveApiBaseUrl = () => {
  const defaultUrl = "http://localhost:3000/api/v1";

  const importMetaUrl =
    typeof import.meta !== "undefined" &&
    import.meta.env &&
    (import.meta.env.VITE_API_URL || import.meta.env.REACT_APP_API_URL);

  const processEnvUrl =
    typeof process !== "undefined" && process.env && process.env.REACT_APP_API_URL;

  return importMetaUrl || processEnvUrl || defaultUrl;
};

class AppURL {
  static BaseURL = resolveApiBaseUrl();
  static VisitorDetails = `${this.BaseURL}/getvisitor`;
  static PostContact = `${this.BaseURL}/postcontact`;
  static AllSiteInfo = `${this.BaseURL}/allsiteinfo`;
  static AllCategoryDetails = `${this.BaseURL}/allcategory`;
  static AllSlider = `${this.BaseURL}/allslider`;

  static ProductListByRemark(remark) {
    return `${this.BaseURL}/productlistbyremark/${remark}`;
  }

  static ProductListByCategory(category) {
    return `${this.BaseURL}/productlistbycategory/${category}`;
  }

  static ProductListBySubCategory(category, subcategory) {
    return `${this.BaseURL}/productlistbysubcategory/${category}/${subcategory}`;
  }

  static ProductDetails(code) {
    return `${this.BaseURL}/productdetails/${code}`;
  }

  static NotificationHistory = `${this.BaseURL}/notification`;

  static ProductBySearch(searchKey) {
    return `${this.BaseURL}/search/${searchKey}`;
  }
}

export default AppURL;
