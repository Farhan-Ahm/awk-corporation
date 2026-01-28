import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '../styles/animations.css';

export const metadata = {
  title: 'AWK Corporation - Quality Construction Services',
  description: 'Professional construction and renovation services since 2016',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}