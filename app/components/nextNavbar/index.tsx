import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

const NavigationBar = () => {
  return (
    <Navbar position="static">
      <NavbarContent className="hidden sm:flex gap-4 bg-slate-200" justify="start">
        
        { /* About Us Seciton */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">About Us</Button>
            </DropdownTrigger>
            { /*  Links for About Us  */}
            <DropdownMenu aria-label="Link Actions">
              <DropdownItem key="HYCGreenBU"> <Link href="/pages/About/HYCGreenBU">HYC Green BU</Link> </DropdownItem>
              <DropdownItem key="Quality" > <Link href="/pages/About/Quality">Our Commitment to Quality</Link> </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* Products Section */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered"> Markets </Button>
            </DropdownTrigger>
            { /*  Links for Products */}
            <DropdownMenu aria-label="Link Actions" disabledKeys={"FoodProcessing"}>
              <DropdownItem key="Packaging"> <Link href="/pages/Markets/Packaging">Packaging</Link> </DropdownItem>
              <DropdownItem key="FoodProcessing" > <Link href="/pages/Markets/FoodProcessing">Food Processing</Link> </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* Services Section */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered"> Markets </Button>
            </DropdownTrigger>
            { /*  Links for Services */}
            <DropdownMenu aria-label="Link Actions" disabledKeys={"FoodProcessing"}>
              <DropdownItem key="Packaging"> <Link href="/pages/Markets/Packaging">Packaging</Link> </DropdownItem>
              <DropdownItem key="FoodProcessing" > <Link href="/pages/Markets/FoodProcessing">Food Processing</Link> </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>


        {/* Contact Section */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered"> Markets </Button>
            </DropdownTrigger>
            { /*  Links for Contact */}
            <DropdownMenu aria-label="Link Actions" disabledKeys={"FoodProcessing"}>
              <DropdownItem key="Packaging"> <Link href="/pages/Markets/Packaging">Packaging</Link> </DropdownItem>
              <DropdownItem key="FoodProcessing" > <Link href="/pages/Markets/FoodProcessing">Food Processing</Link> </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
