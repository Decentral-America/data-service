FROM swaggerapi/swagger-ui

# Copy OpenAPI spec
COPY openapi.json /app/openapi.json
COPY openapi.yaml /app/openapi.yaml

# Set environment variables for Swagger UI to serve at /docs path
ENV BASE_URL="/docs"
ENV SWAGGER_JSON="/app/openapi.json"