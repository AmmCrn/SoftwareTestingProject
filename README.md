# SoftwareTestingProject
Software Testing &amp; Maintenance Project (Ammar Crnkić, Berina Mesihović, Lamija Kožo, Sebahattin Saral)
Smoke tests are: IconVisibility, ContactLoads, HomeTitle, LoginLoads, ProductPageLoads.
Normal Test are : AddtoCart, CheckOut, VerifyLogin, LogOut, RemoveFromCart, FalseLogIn, Search,MaxItems, ComparePage, SearchSorting.
All of the test are in the tests folder. They can be run individually using the command : npx playwright test "directory of the test"
Playwright config not provided as it is the default one, nothing was changed. At most the timeout should be changed if testing on slower internet connections.
