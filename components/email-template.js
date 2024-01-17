import { Html, Head, Text, Link, Container } from "@react-email/components";

export const EmailTemplate = () => {
  return (
    <Html lang="en">
      <Head>
        <title>Welcome to Paired!</title>
        {/* <style>
            body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            }

            .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h1 {
            color: #3498db;
            }

            Text {
            line-height: 1.6;
            }

            .cta-button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #3498db;
            color: #fff;
            text-decoration: none;
            border-radius: 3px;
            }
        </style> */}
      </Head>

      <Container>
        <h1>Welcome to Paired!</h1>
        <Text>
          Thank you for joining the waitlist for Paired, your go-to roommate and
          shared flats search service. We&apos;re excited to help you find
          compatible roommates and ideal living spaces.
        </Text>
        <Text>
          While you wait, feel free to explore more about Paired and get ready
          to create your profile, search for roommate and room ads, and connect
          with potential matches.
        </Text>
        <Text>Click the button below to explore Paired:</Text>
        <Link href="#">Explore Paired</Link>
        <Text>
          If you have any questions or need assistance, don&apos;t hesitate to
          reach out to our support team at support@paired.com.
        </Text>
        <Text>
          Best regards,
          <br /> The Paired Team
        </Text>
      </Container>
    </Html>
  );
};
