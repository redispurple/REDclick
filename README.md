# REDclick
A custom Advertisement display solution for/by RED

### How it works:

- You have to link this using JSDelivr or smth

- Whenever there is a `<div>` with the `class="redAd"` tag it will display a ad from the `list.json` file. The `list.json` file takes a URL to redirect to, a picture URL, a name, and an IMPORTANCE Level. Higher importance levels = the ad shows more often

This inserts:
```html
<a href="${ad.url}" target="_blank" id="adPopup">
          <img src="${ad.picture}" alt="${ad.name}" style="max-width:300px; max-height:250px;" />
        </a>
```
Into the `<div>`, style it as you please