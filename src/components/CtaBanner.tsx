import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

/**
 * CTA Banner component using MUI for accessible controls and Tailwind for layout/styling.
 * - Responsive (stacks on small screens, horizontal on md+)
 * - Accessible (semantic section, aria-labels on buttons)
 * - Customizable via props (title, subtitle, actions, illustration)
 *
 * Example usage:
 * <CtaBanner
 *   title="Launch your store today"
 *   subtitle="Start selling with zero fees for 3 months — simple setup, powerful tools."
 *   primaryText="Get started"
 *   onPrimary={() => router.push('/signup')}
 *   secondaryText="Learn more"
 *   onSecondary={() => router.push('/pricing')}
 *   image="/images/cta-gem.png"
 * />
 */
export default function CtaBanner({
  title,
  subtitle,
  action
}: any) {
  const navigate = useNavigate();

  return (
    <section aria-labelledby="cta-heading">
      <div
        className={`w-full bg-[#2079b4] shadow-lg overflow-hidden p-6 md:p-8 border-t border-amber-50`}
      >
       <Container>
         <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Text column */}
          <div className="flex-1 text-white">
            <Typography
              id="cta-heading"
              component="h2"
              variant="h4"
              className="font-extrabold leading-tight text-white mb-2"
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography
                variant="body1"
                component="p"
                className="opacity-90 max-w-2xl mb-4"
              >
                {subtitle}
              </Typography>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
              <Button
                variant="contained"
                onClick={() => navigate(action?.path)}
                aria-label={action?.label || "Primary action"}
                endIcon={<i className="fa-solid fa-arrow-right text-sm!"></i>}
                className="shadow-md bg-amber-50! text-[#2079b4]!"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                {action?.label}
              </Button>
            </div>
          </div>

          {/* Illustration column */}
          <div className="shrink-0 w-full md:w-48 lg:w-56">
            <img
              src={
                "https://imgs.search.brave.com/jXYXtDxV-ZkrAwqt2aegJwlglWYw5WV9LVsvjnbhip8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MjQ4MjY3MS92ZWN0/b3IvYmxvZy1wYXBl/ci1jb25jZXB0LWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPURC/THZxcTZaU3dwS2o2/ZHdaeU1XWVlJMm0y/Z2Y1NnRxbEpFNG9R/aVhOeHM9"
              }
              alt="CTA illustration"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>
        </div>
       </Container>
      </div>
    </section>
  );
}
