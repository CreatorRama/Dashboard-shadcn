import { useState } from "react";
import {  Settings, BarChart, Users, FileText, Link, Calendar,  HelpCircle, MessageSquare, User, Bell } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Articles");
  
  // Articles data based on the provided image
  const articles = [
    { id: 1, title: "How to Improve Your Skills in League of Legends", keyword: "league of legends [2240000]", words: 4575, createdOn: "20 hours ago" },
    { id: 2, title: "How to Master Last Hitting in League of Legends", keyword: "league of legends [2240000]", words: 3480, createdOn: "21 hours ago" },
    { id: 3, title: "7 Tips for Better Teamplay in League of Legends", keyword: "league of legends [2240000]", words: 2676, createdOn: "a day ago" },
    { id: 4, title: "Top Virtual Executive Assistant Services (2024)", keyword: "virtual executive assistant [2300]", words: 2408, createdOn: "1 Oct, 24" },
    { id: 5, title: "Unlimited Graphics Design Solutions", keyword: "unlimited graphic design services [350]", words: 1733, createdOn: "—" },
    { id: 6, title: "Top Amazon Payment Methods for Quick Access to Funds", keyword: "amazon payment methods [3600]", words: 2647, createdOn: "—" },
    { id: 7, title: "Backlinks 101: What are backlinks and why they're important [Free template]", keyword: "backlinks [8100]", words: 2261, createdOn: "—" },
    { id: 8, title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)", keyword: "ai seo software [880]", words: 1643, createdOn: "—" },
    { id: 9, title: "Unlimited Graphic Design Services You Can Rely On", keyword: "unlimited graphic design services [350]", words: 1874, createdOn: "—" },
  ];
  
  // Sidebar navigation items
  const sidebarItems = [
    { id: "articles", label: "Articles", icon: <FileText className="h-5 w-5" /> },
    { id: "auto-blog", label: "Auto Blog", icon: <BarChart className="h-5 w-5" /> },
    { id: "internal-links", label: "Internal Links", icon: <Link className="h-5 w-5" /> },
    { id: "free-backlinks", label: "Free Backlinks", icon: <Link className="h-5 w-5" /> },
    { id: "integrations", label: "Integrations", icon: <Settings className="h-5 w-5" /> },
    { id: "subscription", label: "Subscription", icon: <Calendar className="h-5 w-5" /> },
    { id: "affiliate-program", label: "Affiliate Program", icon: <Users className="h-5 w-5" /> },
    { id: "help-center", label: "Help Center", icon: <HelpCircle className="h-5 w-5" /> },
    { id: "updates", label: "Updates", icon: <Bell className="h-5 w-5" /> },
    { id: "live-chat-support", label: "Live Chat Support", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "profile", label: "Profile", icon: <User className="h-5 w-5" /> },
  ];

  // Article sub-menu items
  const articleSubmenu = [
    "Create Article",
    "Generated Articles",
    "Keyword Projects",
    "AI Keyword to Article",
    "Steal Competitor Keyword",
    "Import Keyword from GSC",
    "Manual Keyword to Article",
    "Bulk Keyword to Article",
    "Longtrail Keyword to Article",
    "Article Settings"
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl">abun</span>
          </div>
          <div className="mt-4 flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <span>amazon.com</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <div key={item.id}>
                <Button
                  variant={activeSidebarItem === item.label ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSidebarItem(item.label)}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Button>
                
                {item.label === "Articles" && activeSidebarItem === "Articles" && (
                  <div className="ml-6 mt-2 space-y-1">
                    {articleSubmenu.map((subItem, idx) => (
                      <Button key={idx} variant="ghost" size="sm" className="w-full justify-start text-sm">
                        {subItem}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main Content Header */}
        <header className="bg-white border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Articles</h1>
          </div>
        </header>

        {/* Main Content Body */}
        <main className="flex-1 overflow-y-auto p-4">
          <Card className="bg-white shadow-sm">
            <div className="p-4">
              <Tabs defaultValue="generated">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="generated">Generated Articles</TabsTrigger>
                  <TabsTrigger value="published">Published Articles</TabsTrigger>
                  <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
                  <TabsTrigger value="archived">Archived Articles</TabsTrigger>
                </TabsList>

                <TabsContent value="generated" className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-full max-w-sm">
                      <Input placeholder="Search for Title & Keywords..." />
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <input type="checkbox" className="h-4 w-4" />
                          </TableHead>
                          <TableHead className="font-medium">Article Title</TableHead>
                          <TableHead className="font-medium">Keyword [Traffic]</TableHead>
                          <TableHead className="font-medium">Words</TableHead>
                          <TableHead className="font-medium">Created On</TableHead>
                          <TableHead className="font-medium">Action</TableHead>
                          <TableHead className="font-medium">Publish</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {articles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell>
                              <input type="checkbox" className="h-4 w-4" />
                            </TableCell>
                            <TableCell className="font-medium">{article.title}</TableCell>
                            <TableCell>{article.keyword}</TableCell>
                            <TableCell>{article.words}</TableCell>
                            <TableCell>{article.createdOn}</TableCell>
                            <TableCell>
                              <Button variant="outline" size="sm">View</Button>
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">•</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>Publish Now</DropdownMenuItem>
                                  <DropdownMenuItem>Schedule</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Total 9 Article Titles | Show 
                      <select className="ml-2 border rounded p-1 text-sm">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                      <span className="ml-2">entries per page</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">1 / 1</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}