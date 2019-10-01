# Contributions

## 1.0 Philosophy

The National Archives’ Digital Services frontend design and development mission is to:

- deliver **high quality**, **inclusive** and **maintainable** digital services, whilst;
- achieving a good balance between **innovation** and **effective use** of our capability;
- and therefore, giving our millions of users an **engaging**, **useful** and **satisfying** experience while using our services.

## 2.0 Principles

### 2.1 User-centred approach

An evidence base approach focusing on the users and their needs at each phase of the design and development life-cycle.

### 2.2 Inclusivity

Technology, infrastructure and systems must be accessible for all users conforming to WCAG 2.1 - level Double-A. Accessible design principles; perceivable, operable, understandable and robust.

### 2.3 Progressive enhancement

Progressive enhancement provides core content, functionality and compatibility without JavaScript or CSS across browsers and devices to ensure stability.

### 2.4 A component/modular approach

Ensuring digital assets are reusable, maintainable and scalable.

### 2.5 Browser/Device Support

Users must be able to access the information they need or be able to complete their task without layout or functionality issues.

## 3.0 Guidelines

We welcome contributions to The National Archives front end toolkit. To do so we ask contributors to follow a simple step process:

1. Follow the [development setup](https://github.com/nationalarchives/tna-frontend-toolkit/blob/feature/contributions/README.md#20-development-setup).
2. Raise an issue as described in the [guideline checklist](#31-guideline-checklist).
3. Create a feature branch for your new code. Follow our [commit message guidelines](#32-commit-messages) and [CSS/Sass rules](#50-css-style-guide).
4. Submit a pull request with the required documentation as described in the [guideline checklist](#31-guideline-checklist).

### 3.1 Guideline checklist

- Raise an issue describing the component you wish to contribute. A [template](https://github.com/nationalarchives/tna-frontend-toolkit/issues/new?assignees=gtvj&labels=enhancement&template=new-component-for-the-national-archives-front-end-toolkit.md&title=) is provided for this purpose
- Submit a pull request containing code for the new component. The code must be accompanied, within the pull request comments, by:
  - A clear summary describing the new component and usage
  - HTML example snippet of usage
  - Detailed description of how the new component meets the [contribution criteria](#40-contribution-criteria).

### 3.2 Commit messages

We ask that developers contributing to this repository take a considered approach to their commit messages. We believe a considered commit message is the best way to communicate context about a change and is therefore a vital aspect of good collaboration. A particularly useful resource for understanding this is provided in [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/) which outlines the [seven rules](https://chris.beams.io/posts/git-commit/#seven-rules) of a great Git commit message as:

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain _what_ and _why_ vs. how

Click [here](https://semver.org) to find out more, of what would be classed as MAJOR, MINOR and PATCH.

## 4.0 Contribution criteria

All patterns in The National Archives front end toolkit must be of high quality and meet user needs. To ensure this all contributions must meet the following criteria:

| Criteria       | Description                                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Useful**     | All new patterns and components must be a useful addition for users.                                                                                                                                                                                                                                                                                                   |
| **Consistent** | All new patterns and components must be consistent with The National Archives brand.                                                                                                                                                                                                                                                                                   |
| **Value**      | All new patterns and components should add value to the toolkit and the user experience.                                                                                                                                                                                                                                                                               |
| **Evidence**   | All new patterns and components must be accompanied by evidence. If a pattern or component is replaces existing one, look to provide evidence to show it will improve on an existing approach. This could be in the format of feedback from testing, similar features used in other services/scenarios or a user need not currently being met by an existing approach. |

When submitting a Pull Request please provide as much information as possible about how it meets the above criteria. This will help reviewers understand your suggestion.

## 5.0 CSS style guide

### 5.1 Block Element Modifier (BEM)

TNA frontend toolkit uses the [Block Element Modifier (BEM)](http://getbem.com/) methodology when naming CSS classes. This is designed to help developers understand how the different classes relate to each other.

### 5.2 Bootstrap 4.3.1 grid

TNA frontend toolkit uses [Bootstrap 4.3.1 grid system](https://getbootstrap.com/docs/4.3/layout/grid/). Other Bootstrap components are not included.

### 5.3 CSS and Sass rules

#### 5.3.1 Don't mix BEM and Bootstrap classes on the same element

Bad:
```
<div class="col-sm-8 block__element">
</div>
```

Good:
```
<div class="col-sm-8">
  <div class="block__element">
  </div>
</div>
```

#### 5.3.2 Write each property on its own line

Bad:
```
.block {border: 0; padding: 0;}
```

Good:
```
.block {
  border: 0;
  padding: 0;
}
```

#### 5.3.3 Use variables for colours

Bad:
```
.block {
  color: #005ea5;
}
```

Good:
```
.block {
  color: $blue;
}
```

#### 5.3.4 Avoid using ID selectors

Bad:
```
#block {
  ...
}
```

Good:
```
.block {
  ...
}
```

#### 5.3.5 Separate rule, function, and mixin declarations with empty lines

Bad:
```
p {
  margin: 0;
  em {
    ...
  }
}
a {
  ...
}
```

Good:
```
p {
  margin: 0;

  em {
    ...
  }
}

a {
  ...
}
```

#### 5.3.6 Use no more than 3 levels of nesting

Bad:
```
.block {
  ...
  
  &__element {
  ...
  
    p {
      margin: 0;
    
      em {
        ...
      }
    }
  }
}
```

Good:
```
.block {
  ...
}

.block__element {
  ...
  
  p {
    margin: 0;
    
    em {
      ...
    }
  }
}
```

#### 5.3.7 Properties should be formatted with a single space separating the colon from the property's value

Bad:
```
.block {
  margin:0;
}
```

Good:
```
.block {
  margin: 0;
}
```

#### 5.3.8 Omit length units on zero values

Bad:
```
.block {
  margin: 0px;
}
```

Good:
```
.block {
  margin: 0;
}
```

## 6.0 Versioning

Using semantic versioning helps to keep track of releases, bug fixes and manage dependancies.
Eg version `1.5.3`

- `1` - would be a MAJOR change.
- `5` - would be a MINOR change.
- `3` - would be a PATCH update.


