# Data Model: Physical AI & Humanoid Robotics Textbook

## Entities

### User Profile
**Description**: Represents a learner with information about progress, preferences, and learning history
- **Fields**:
  - userId: Unique identifier for the user
  - preferences: User preferences (language, learning style, accessibility needs)
  - progress: Tracking of completed chapters and exercises
  - achievements: Badges and accomplishments earned
  - createdAt: Timestamp of profile creation
  - lastActive: Timestamp of last activity

### Textbook Chapter
**Description**: Represents a section of educational content with associated hands-on examples and assessments
- **Fields**:
  - chapterId: Unique identifier for the chapter
  - title: Title of the chapter
  - content: The main content of the chapter (Markdown format)
  - language: Language of the content (English, Urdu, etc.)
  - level: Difficulty level (beginner, intermediate)
  - prerequisites: List of required prior chapters
  - handsOnExamples: Collection of practical exercises
  - assessments: Collection of quizzes and exercises
  - createdAt: Timestamp of chapter creation
  - updatedAt: Timestamp of last update

### Learning Resource
**Description**: Represents content items including text, code examples, diagrams, and interactive elements
- **Fields**:
  - resourceId: Unique identifier for the resource
  - type: Type of resource (text, code, diagram, video, interactive)
  - content: The actual content or reference to it
  - title: Title of the resource
  - chapterId: Reference to the chapter this resource belongs to
  - language: Language of the content
  - accessibilityFeatures: List of accessibility features

### Assessment
**Description**: Represents quizzes and exercises designed to test user understanding of concepts
- **Fields**:
  - assessmentId: Unique identifier for the assessment
  - title: Title of the assessment
  - type: Type of assessment (quiz, exercise, project)
  - questions: Collection of questions or tasks
  - chapterId: Reference to the chapter this assessment belongs to
  - difficulty: Difficulty level (easy, medium, hard)
  - expectedTime: Estimated time to complete
  - passingScore: Minimum score required to pass

### Language Version
**Description**: Represents translated content for multilingual support
- **Fields**:
  - translationId: Unique identifier for the translation
  - originalContentId: Reference to the original content
  - language: Target language (en, ur, etc.)
  - translatedContent: The translated content
  - translator: Information about the translator or translation method
  - reviewStatus: Status of translation review (pending, reviewed, approved)
  - lastUpdated: Timestamp of last translation update

## Relationships

- User Profile → Textbook Chapter: User progress tracking (many-to-many through progress records)
- Textbook Chapter → Learning Resource: Chapter contains multiple resources (one-to-many)
- Textbook Chapter → Assessment: Chapter has associated assessments (one-to-many)
- Textbook Chapter → Language Version: Chapter has translations (one-to-many)
- Learning Resource → Language Version: Resources have translations (one-to-many)

## Validation Rules

- User Profile: userId must be unique, preferences must be valid options
- Textbook Chapter: chapterId must be unique, content must be properly formatted
- Learning Resource: resourceId must be unique, type must be from allowed list
- Assessment: assessmentId must be unique, passingScore must be between 0-100
- Language Version: combination of originalContentId and language must be unique

## State Transitions

- Assessment: draft → reviewed → published
- Language Version: translated → pending_review → approved
- User Profile: created → active → (potentially) inactive