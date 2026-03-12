# ChrissyWeems.org

Next.js 16, React 19, TypeScript, Tailwind CSS 4
Deployed on Vercel: https://chrissy-weems-org.vercel.app
Production: https://chrissyweems.org
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/chrissy-weems-org/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/chrissy-weems-org/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/chrissy-weems-org/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/chrissy-weems-org/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
