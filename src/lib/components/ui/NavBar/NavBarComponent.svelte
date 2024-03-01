<script lang="ts">
    import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from ".";
    let active: any = null;
</script>

<div class="relative flex w-full items-center justify-between">
    <div class={"fixed inset-x-0 top-5 z-50 mx-auto max-w-xl "}>
        <NavbarMenu>
            <MenuItem {active} item="About me">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#">Hobby</HoveredLink>
                    <HoveredLink href="#">Individual</HoveredLink>
                    <HoveredLink href="#">Team</HoveredLink>
                    <HoveredLink href="#">Enterprise</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem {active} item="Technologies">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#test">Web Development</HoveredLink>
                    <HoveredLink href="#">Interface Design</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem {active} item="Experience">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#anh-tuan"
                        >Anh Tuan Driving Center</HoveredLink
                    >
                    <HoveredLink href="#gmo"
                        >GMO-Z.com Runsystem JSC</HoveredLink
                    >
                </div>
            </MenuItem>
            <MenuItem {active} item="Projects">
                <div
                    class="  grid grid-cols-2 gap-10 p-4 text-sm text-blue-600"
                >
                    <ProductItem
                        title="Algochurn"
                        href="#"
                        src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                        title="Tailwind Master Kit"
                        href="#"
                        src="https://images.pexels.com/photos/733071/pexels-photo-733071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                        title="Moonbeam"
                        href="#"
                        src="https://images.pexels.com/photos/730424/pexels-photo-730424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                        title="Rogue"
                        href="#"
                        src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                </div>
            </MenuItem>
            <MenuItem {active} item="Certificate">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#">Hobby</HoveredLink>
                    <HoveredLink href="#">Individual</HoveredLink>
                    <HoveredLink href="#">Team</HoveredLink>
                    <HoveredLink href="#">Enterprise</HoveredLink>
                </div>
            </MenuItem>
        </NavbarMenu>
    </div>
</div>
