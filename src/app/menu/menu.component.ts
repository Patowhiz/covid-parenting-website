import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name: string,
  href?: string,
  fragment?: string,
  subMenuItems?: MenuItem[],
  subMenuOpen?: boolean
};

//todo. this needs to be globalised
const MENU_ITEMS: MenuItem[] = [
  { name: "HOME", href: "/" },
  {
    name: "RESOURCES",
    href: "/resources",
    subMenuItems: [
      { name: "Parenting Tips", href: "/tips" },
      { name: "Caseworkers", href: "/caseworkers" },
      { name: "Public Service Announcements", href: "/psa" },
      { name: "Digital Parenting", href: "/digitalparenting" },
      { name: "Audiovisual", href: "/" },
      { name: "Faith-Based Resources", href: "/" },
      { name: "Social Media", href: "/" },
      /**   {
          name: "Radio Scripts",
          href: "/tips",
          fragment: "radio"
        },**/
    ]
  },
  {
    name: "NEWS",
    href: "/news",
    subMenuItems: [
      { name: "Newsletters", href: "/" },
      { name: "Webinars", href: "/" }
    ]
  },

  {
    name: "ABOUT US",
    href: "/aboutus",
    subMenuItems: [
      { name: "Our Work", href: "/aboutus" },
      { name: "Partners & Funders", href: "/aboutus" },
      { name: "Contributors", href: "/contributors" }
    ]
  },
  { name: "IMPACT", href: "/impact" },
  { name: "TELL US WHAT YOU THINK", href: "/contactus" }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuDropdownOpen: boolean = false;
  menuItems = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  mouseEnterMenuItem($event, item: MenuItem) {
    if (item.subMenuItems) {
      item.subMenuOpen = true;
    }
  }

  mouseLeaveMenuItem($event, item: MenuItem) {
    item.subMenuOpen = false;
  }
}

