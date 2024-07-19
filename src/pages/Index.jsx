import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to Your Bare-Bones App</CardTitle>
          <CardDescription>This is a minimal web application that you can modify and build upon.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            To get started, you can:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Modify the content in <code>src/pages/Index.jsx</code></li>
            <li>Add new pages in the <code>src/pages</code> directory</li>
            <li>Update the navigation items in <code>src/nav-items.jsx</code></li>
            <li>Customize the layout in <code>src/layouts/navbar/index.jsx</code></li>
          </ul>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;