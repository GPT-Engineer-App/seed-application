import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About This App</CardTitle>
          <CardDescription>Learn more about this bare-bones application</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is a minimal web application created as a starting point for your project. It uses:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>React for building user interfaces</li>
            <li>Tailwind CSS for styling</li>
            <li>shadcn/ui for pre-built components</li>
            <li>React Router for navigation</li>
          </ul>
          <p>
            Feel free to modify this page or add new pages to suit your project's needs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;