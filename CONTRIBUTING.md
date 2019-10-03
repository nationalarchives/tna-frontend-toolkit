# Contributions

## 1 Philosophy

The National Archives’ Digital Services frontend design and development mission is to:

- deliver **high quality**, **inclusive** and **maintainable** digital services, whilst;
- achieving a good balance between **innovation** and **effective use** of our capability;
- and therefore, providing an **engaging**, **useful** and **satisfying** experience for our millions of users.

## 2 Principles

### 2.1 User-centred approach

An evidence-based approach focusing on the users and their needs at each phase of the design and development life-cycle.

### 2.2 Inclusivity

Technology, infrastructure and systems must be accessible for all users conforming to WCAG 2.1 level AA.

### 2.3 Progressive enhancement

Progressive enhancement ensures core content and functionality are delivered through HTML alone with no reliance upon CSS or JavaScript.

### 2.4 A component/modular approach

Ensuring digital assets are reusable, maintainable and scalable.

### 2.5 Browser/Device Support

Users must be able to access the information they need or be able to complete their task without layout or functionality issues.

## 3 Contribution guidelines

We welcome contributions to The National Archives front end toolkit. To do so we ask contributors to follow a simple step process:

1. Follow the [development setup](https://github.com/nationalarchives/tna-frontend-toolkit#2-development-setup).
2. Raise an issue as described in the [guideline checklist](#31-guideline-checklist).
3. Create a feature branch for your new code. Follow our [commit message guidelines](#32-commit-messages) and [CSS/Sass rules](#5-css-style-guide).
4. Test your code as described in [browser/device testing](#6-browserdevice-testing).
5. Submit a pull request with the required documentation as described in the [guideline checklist](#31-guideline-checklist).

### 3.1 Guideline checklist

- Raise an issue describing the component you wish to contribute. A [template](https://github.com/nationalarchives/tna-frontend-toolkit/issues/new?assignees=gtvj&labels=enhancement&template=new-component-for-the-national-archives-front-end-toolkit.md&title=) is provided for this purpose
- Submit a [pull request](https://help.github.com/en/articles/about-pull-requests) containing code for the new component. The code must be accompanied, within the pull request comments, by:
  - A clear summary describing the new component with issue number raised
  - HTML example snippet of usage
  - Detailed description of how the new component meets the [contribution criteria](#4-contribution-criteria).

### 3.2 Commit messages

We ask that developers contributing to this repository take a considered approach to their commit messages. We believe a considered commit message is the best way to communicate context about a change and is therefore a vital aspect of good collaboration. A particularly useful resource for understanding this is provided in [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/) which outlines the [seven rules](https://chris.beams.io/posts/git-commit/#seven-rules) of a great Git commit message as:

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain _what_ and _why_ vs. how

### 3.3 How will we respond?

We will comment on your issue as soon as we can. In order for a pull request to be accepted, it MUST include all relevant information as specified in the [guideline checklist](#31-guideline-checklist). Your pull request will be reviewed by members of The National Archives Digital Services and if the new component satifies our [contribution criteria](#4-contribution-criteria) and [CSS/Sass guidelines](#5-css-style-guide), we’ll add it to the main project.

## 4 Contribution criteria

All patterns in The National Archives front end toolkit must be of high quality and meet user needs. To ensure this all contributions must meet the following criteria:

| Criteria       | Description                                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Useful**     | All new patterns and components must be a useful addition for users.                                                                                                                                                                                                                                                                                                   |
| **Consistent** | All new patterns and components must be consistent with The National Archives brand.                                                                                                                                                                                                                                                                                   |
| **Value**      | All new patterns and components should add value to the toolkit and the user experience.                                                                                                                                                                                                                                                                               |
| **Evidence**   | All new patterns and components must be accompanied by evidence. If a pattern or component is replaces existing one, look to provide evidence to show it will improve on an existing approach. This could be in the format of feedback from testing, similar features used in other services/scenarios or a user need not currently being met by an existing approach. |

When submitting a Pull Request please provide as much information as possible about how it meets the above criteria. This will help reviewers understand your suggestion.

## 5 CSS style guide

### 5.1 Block Element Modifier (BEM)

TNA frontend toolkit uses the [Block Element Modifier (BEM)](http://getbem.com/) methodology when naming CSS classes. This is designed to help developers understand how the different classes relate to each other.

### 5.2 Bootstrap 4.3.1 grid

TNA frontend toolkit uses [Bootstrap 4.3.1 grid system](https://getbootstrap.com/docs/4.3/layout/grid/). Other Bootstrap components are not included.

### 5.3 Namespacing

All class names start with a `.tna-` namespace to reduce the likelihood of conflicting with existing classes in applications.

### 5.4 CSS and Sass rules

#### 5.4.1 Don't mix BEM and Bootstrap classes on the same element

Bad:
```html
<div class="col-sm-8 block__element">
</div>
```

Good:
```html
<div class="col-sm-8">
  <div class="block__element">
  </div>
</div>
```

#### 5.4.2 Write each property on its own line

Bad:
```scss
.block {border: 0; padding: 0;}
```

Good:
```scss
.block {
  border: 0;
  padding: 0;
}
```

#### 5.4.3 Use variables for colours

Bad:
```scss
.block {
  color: #005ea5;
}
```

Good:
```scss
.block {
  color: $blue;
}
```

#### 5.4.4 Avoid using ID selectors

Bad:
```scss
#block {
  ...
}
```

Good:
```scss
.block {
  ...
}
```

#### 5.4.5 Separate rule, function, and mixin declarations with empty lines

Bad:
```scss
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
```scss
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

#### 5.4.6 Use no more than 3 levels of nesting

Bad:
```scss
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
```scss
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

#### 5.4.7 Properties should be formatted with a single space separating the colon from the property's value

Bad:
```scss
.block {
  margin:0;
}
```

Good:
```scss
.block {
  margin: 0;
}
```

#### 5.4.8 Omit length units on zero values

Bad:
```scss
.block {
  margin: 0px;
}
```

Good:
```scss
.block {
  margin: 0;
}
```

## 6 Browser/Device testing

Manually test the code on the following browsers:

| Operating system | Browser | Support|
|------------------|---------|--------|
| Windows | Internet Explorer 11 | compliant |
|  | 	Edge (latest versions) | compliant |
|  | 	Google Chrome (latest versions) | compliant |
|  | 	Mozilla Firefox (latest versions) | compliant |
| macOS | Safari 12 and later | compliant |
|  | Google Chrome (latest versions) | compliant |
|  | Mozilla Firefox (latest versions) | compliant |
| iOS | Safari for iOS 10.3 and later | compliant |
|  | Google Chrome (latest versions) | compliant |
| Android | Google Chrome (latest versions) | compliant |
|  | Samsung Internet (latest versions) | compliant |

**Compliant** - All content is accessible and the site is visually and functionally complete.

For more information please see [GOV.UK Designing for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).

## 7 Versioning

Click [here](https://semver.org) to find out more, of what would be classed as MAJOR, MINOR and PATCH.

Using semantic versioning helps to keep track of releases, bug fixes and manage dependancies.
Eg version `1.5.3`

- `1` - would be a MAJOR change.
- `5` - would be a MINOR change.
- `3` - would be a PATCH update.


