const createUserValidationSchema = {
  username: {
    notEmpty: {
      errorMessage: 'Username is required',
    },
    isString: {
      errorMessage: 'Username must be a string',
    },
    isLength: {
      options: { min: 5, max: 32 },
      errorMessage:
        'Username must be at least 5 characters long and at most 32 characters long',
    },
  },
  displayName: {
    notEmpty: true,
  },
};

const createQueryValidationSchema = {
  'query.filter': {
    in: ['query'],
    notEmpty: {
      errorMessage: 'Filter must not be empty',
    },
    isString: {
      errorMessage: 'Filter must be a string',
    },
    isLength: {
      options: { min: 3, max: 10 },
      errorMessage: 'Filter must be between 3 and 10 characters',
    },
  },
  'query.value': {
    in: ['query'],
    notEmpty: {
      errorMessage: 'Value must not be empty',
    },
    isString: {
      errorMessage: 'Value must be a string',
    },
  },
};


export { createUserValidationSchema, createQueryValidationSchema };
