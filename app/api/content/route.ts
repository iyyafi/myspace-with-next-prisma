import { NextResponse } from "next/server";

// Dummy data
const posts = [
  {
    title: "Lorem ipsum dolor sit amet",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, enim ac fringilla volutpat, diam urna semper tellus, eget faucibus nulla neque ut lectus. Morbi vel semper urna. In hac habitasse platea dictumst. Donec ac eros sed mi tincidunt congue. Sed non neque ac sem ullamcorper tincidunt. Nullam velit velit, luctus sit amet faucibus sit amet, consectetur vitae ligula.",
  },
  {
    title: "Phasellus ac urna semper, tincidunt mi eu, scelerisque nunc",
    slug: "phasellus-urna",
    content:
      "Phasellus ac urna semper, tincidunt mi eu, scelerisque nunc. Donec vel quam quis sapien mattis lacinia. In hac habitasse platea dictumst. Sed vitae dolor non diam fermentum accumsan. Praesent ut diam ac eros semper iaculis. Donec vel quam quis sapien mattis lacinia. In hac habitasse platea dictumst. Sed vitae dolor non diam fermentum accumsan. Praesent ut diam ac eros semper iaculis.",
  },
  {
    title:
      "Donec accumsan metus ut eros ullamcorper, ac tincidunt sem tincidunt",
    slug: "donec-metus",
    content:
      "Donec accumsan metus ut eros ullamcorper, ac tincidunt sem tincidunt. Nullam in quam eu enim tincidunt semper vitae sed lectus. In hac habitasse platea dictumst. Praesent et lorem sit amet diam faucibus iaculis. Nullam in quam eu enim tincidunt semper vitae sed lectus. In hac habitasse platea dictumst. Praesent et lorem sit amet diam faucibus iaculis.",
  },
];
export async function GET() {
  return NextResponse.json(posts);
}
