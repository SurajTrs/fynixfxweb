import AccountsOverviewCards from "@/components/accounts/overview/AccountsOverviewCards";
import AccountsOverviewCTA from "@/components/accounts/overview/AccountsOverviewCTA";
import AccountsOverviewHero from "@/components/accounts/overview/AccountsOverviewHero";
import AccountsOverviewTable from "@/components/accounts/overview/AccountsOverviewTable";
import AccountsOverviewWhyRaw from "@/components/accounts/overview/AccountsOverviewWhyRaw";

export default function AccountsOverview() {
  return (
    <main>
      <AccountsOverviewHero />
      <AccountsOverviewCards />
        <AccountsOverviewWhyRaw />
      <AccountsOverviewTable />
      <AccountsOverviewCTA />
    </main>
  );
}


