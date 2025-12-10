# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control
- Claude Code for AI-assisted development

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies
```bash
cd docs-site
npm install
```

### 3. Set Up Claude Code Integration
```bash
# Follow Claude Code setup instructions for your environment
# This typically involves authentication and configuration
```

### 4. Configure Environment Variables
Create a `.env` file in the `docs-site` directory with the following variables:
```env
# AI Integration
OPENAI_API_KEY=your_openai_api_key_here
VECTOR_DB_URL=your_vector_database_url_here
VECTOR_DB_KEY=your_vector_database_key_here

# Internationalization
DEFAULT_LANGUAGE=en
SUPPORTED_LANGUAGES=en,ur

# Performance
CACHE_TTL=3600
MAX_AI_REQUESTS_PER_MINUTE=60
```

### 5. Initialize the Development Server
```bash
npm run start
```

The development server will start at `http://localhost:3000`.

## Adding New Content

### 1. Create a New Chapter
1. Create a new Markdown file in the `docs-site/docs/` directory
2. Follow the naming convention: `01-introduction-to-physical-ai.md`
3. Include frontmatter with metadata:

```markdown
---
title: Introduction to Physical AI
sidebar_position: 1
description: Learn the fundamentals of Physical AI and its applications
---

# Introduction to Physical AI

Your content here...
```

### 2. Add Hands-On Examples
1. Create code examples in the `docs-site/src/components/` directory
2. Use the provided example component template
3. Reference examples in your chapter content

### 3. Create Assessments
1. Add assessment content to your chapter file
2. Use the assessment component: `<Assessment />`
3. Define questions and answers in the component props

## AI Assistant Integration

### 1. Enable RAG Chatbot
The RAG (Retrieval-Augmented Generation) chatbot is enabled by default on all textbook pages.

### 2. Train the AI Model
1. Run the content indexing script:
```bash
npm run index-content
```
2. This processes all textbook content into the vector database

### 3. Customize AI Responses
1. Modify the prompt templates in `docs-site/src/utils/ai-prompt-templates.js`
2. Adjust response formatting in `docs-site/src/components/AIResponse.jsx`

## Multilingual Support

### 1. Add Urdu Translation
1. Create a new directory in `docs-site/i18n/ur/docusaurus-plugin-content-docs/current/`
2. Copy the English content structure
3. Translate the content while maintaining the same file structure

### 2. Update Translation Status
1. Update the `docs-site/i18n/ur/code.json` file with UI translations
2. Mark translations as complete in the content metadata

## Personalization Features

### 1. Enable User Tracking
User progress tracking is enabled by default. Users can create profiles to save their progress.

### 2. Customize Learning Paths
1. Modify the learning path algorithm in `docs-site/src/utils/learning-path.js`
2. Adjust personalization rules in `docs-site/src/context/PersonalizationContext.jsx`

## Development Commands

```bash
# Start development server
npm run start

# Build for production
npm run build

# Run tests
npm run test

# Serve built site locally
npm run serve

# Index content for AI
npm run index-content

# Generate API documentation
npm run generate-api-docs
```

## Troubleshooting

### Common Issues

1. **AI Responses Not Working**
   - Check that your API keys are correctly configured
   - Verify the vector database is properly connected
   - Run `npm run index-content` to re-index the content

2. **Translation Not Displaying**
   - Ensure the language files are properly structured
   - Check that the language is included in `SUPPORTED_LANGUAGES`
   - Verify the translation files are in the correct directory

3. **Performance Issues**
   - Clear browser cache and try again
   - Check that caching is properly configured
   - Monitor API rate limits for AI services

## Next Steps

1. Review the detailed documentation in the `/docs` directory
2. Explore the API documentation for customization options
3. Set up continuous integration for automated testing
4. Configure monitoring and analytics for the textbook site